/**
 * Report Routes
 * Handles ADR report CRUD operations
 */

const express = require('express');
const { body, validationResult } = require('express-validator');
const Report = require('../models/Report');
const { authenticate, isAdmin, isHCP } = require('../middleware/auth');

const router = express.Router();

/**
 * POST /api/reports
 * Create a new ADR report
 * Protected route - any authenticated user
 */
router.post('/', authenticate, [
  body('drugName').trim().notEmpty().withMessage('Drug name is required'),
  body('symptoms').trim().notEmpty().withMessage('Symptoms are required'),
  body('severity').isIn(['mild', 'moderate', 'severe', 'life-threatening']).withMessage('Valid severity is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('reactionDate').isISO8601().withMessage('Valid reaction date is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const {
      drugName,
      drugDosage,
      drugManufacturer,
      batchNumber,
      symptoms,
      severity,
      description,
      reactionDate,
      startDate,
      stopDate,
      patientInfo,
      outcome
    } = req.body;

    // Create report
    const report = new Report({
      reporter: req.user._id,
      drugName,
      drugDosage,
      drugManufacturer,
      batchNumber,
      symptoms,
      severity,
      description,
      reactionDate: new Date(reactionDate),
      startDate: startDate ? new Date(startDate) : null,
      stopDate: stopDate ? new Date(stopDate) : null,
      patientInfo,
      outcome: outcome || 'unknown',
      reporterType: req.user.role === 'hcp' ? 'hcp' : 'patient'
    });

    await report.save();

    res.status(201).json({
      success: true,
      message: 'Report submitted successfully',
      report
    });

  } catch (error) {
    console.error('Error creating report:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting report',
      error: error.message
    });
  }
});

/**
 * GET /api/reports
 * Get reports (filtered by role)
 * Patients see their own, HCPs see their own, Admin sees all
 */
router.get('/', authenticate, async (req, res) => {
  try {
    let query = {};

    // If not admin, only show user's own reports
    if (req.user.role !== 'admin') {
      query.reporter = req.user._id;
    }

    // Optional filters
    const { status, severity, drugName } = req.query;
    if (status) query.status = status;
    if (severity) query.severity = severity;
    if (drugName) query.drugName = { $regex: drugName, $options: 'i' };

    const reports = await Report.find(query)
      .populate('reporter', 'name email role')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: reports.length,
      reports
    });

  } catch (error) {
    console.error('Error fetching reports:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching reports',
      error: error.message
    });
  }
});

/**
 * GET /api/reports/:id
 * Get single report by ID
 */
router.get('/:id', authenticate, async (req, res) => {
  try {
    const report = await Report.findById(req.params.id)
      .populate('reporter', 'name email role');

    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found'
      });
    }

    // Check if user has permission to view this report
    if (req.user.role !== 'admin' && report.reporter._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      report
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching report',
      error: error.message
    });
  }
});

/**
 * PUT /api/reports/:id
 * Update report (reporter can update their own, admin can update any)
 */
router.put('/:id', authenticate, async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found'
      });
    }

    // Check permissions
    if (req.user.role !== 'admin' && report.reporter.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    // Users can only update certain fields if not admin
    const allowedUpdates = req.user.role === 'admin'
      ? Object.keys(req.body)
      : ['drugName', 'drugDosage', 'drugManufacturer', 'batchNumber', 'symptoms', 'severity', 'description', 'reactionDate', 'startDate', 'stopDate', 'patientInfo', 'outcome'];

    const updateData = {};
    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    const updatedReport = await Report.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Report updated successfully',
      report: updatedReport
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating report',
      error: error.message
    });
  }
});

/**
 * PUT /api/reports/:id/status
 * Update report status (Admin only)
 */
router.put('/:id/status', authenticate, isAdmin, [
  body('status').isIn(['submitted', 'under-review', 'verified', 'rejected', 'forwarded']).withMessage('Valid status required'),
  body('adminNotes').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { status, adminNotes } = req.body;

    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { status, adminNotes },
      { new: true }
    );

    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      report
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating status',
      error: error.message
    });
  }
});

/**
 * DELETE /api/reports/:id
 * Delete report (admin only)
 */
router.delete('/:id', authenticate, isAdmin, async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        message: 'Report not found'
      });
    }

    res.json({
      success: true,
      message: 'Report deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting report',
      error: error.message
    });
  }
});

/**
 * GET /api/reports/stats/overview
 * Get report statistics (Admin only)
 */
router.get('/stats/overview', authenticate, isAdmin, async (req, res) => {
  try {
    const totalReports = await Report.countDocuments();
    const byStatus = await Report.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    const bySeverity = await Report.aggregate([
      { $group: { _id: '$severity', count: { $sum: 1 } } }
    ]);
    const recentReports = await Report.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
    });

    res.json({
      success: true,
      stats: {
        totalReports,
        byStatus,
        bySeverity,
        recentReports
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching statistics',
      error: error.message
    });
  }
});

module.exports = router;
