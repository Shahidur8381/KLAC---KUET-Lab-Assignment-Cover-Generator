import React from 'react';
import { getDhakaDate } from './utils';

export default function LabForm({ data, setData, onDownload }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmissionDateChange = (e) => {
        const subDateStr = e.target.value; // yyyy-mm-dd
        const newData = { ...data, submissionDate: subDateStr };
        
        if (subDateStr) {
            const subDateObj = new Date(subDateStr + 'T00:00:00');
            subDateObj.setDate(subDateObj.getDate() - 7);
            newData.performanceDate = subDateObj.toISOString().slice(0, 10);
        } else {
            newData.performanceDate = '';
        }
        setData(newData);
    };

    const setDate = (offsetDays) => {
        const dateObj = getDhakaDate(offsetDays);
        const yyyy = dateObj.getFullYear();
        const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
        const dd = String(dateObj.getDate()).padStart(2, '0');
        
        const subDateStr = `${yyyy}-${mm}-${dd}`;
        const subDateObj = new Date(subDateStr + 'T00:00:00');
        subDateObj.setDate(subDateObj.getDate() - 7);
        const perfDateStr = subDateObj.toISOString().slice(0, 10);
        
        setData(prev => ({ ...prev, submissionDate: subDateStr, performanceDate: perfDateStr }));
    };

    return (
        <aside className="form-card">
            <h2>Lab Cover Inputs</h2>
            <p className="subtitle">Prefilled values are editable. Submission date can be picked quickly using Today/Tomorrow and performance date auto-fills 7 days earlier.</p>

            <div className="section-title">Lab Report Details</div>
            <div className="field">
                <label>Course No.</label>
                <input type="text" name="courseNo" value={data.courseNo} onChange={handleChange} />
            </div>
            <div className="field">
                <label>Department</label>
                <input type="text" name="department" value={data.department} onChange={handleChange} />
            </div>
            <div className="field">
                <label>Experiment No.</label>
                <input type="text" name="experimentNo" value={data.experimentNo} onChange={handleChange} />
            </div>
            <div className="field">
                <label>Name of the Experiment</label>
                <input type="text" name="experimentName" value={data.experimentName} onChange={handleChange} />
            </div>
            
            <div className="section-title">Student Details</div>
            <div className="field">
                <label>Name</label>
                <input type="text" name="studentName" value={data.studentName} onChange={handleChange} />
            </div>
            <div className="field">
                <label>Roll No.</label>
                <input type="text" name="roll" value={data.roll} onChange={handleChange} />
            </div>
            <div className="two-col">
                <div className="field">
                    <label>Group No.</label>
                    <input type="text" name="group" value={data.group} onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Year</label>
                    <input type="text" name="year" value={data.year} onChange={handleChange} />
                </div>
            </div>
            <div className="field">
                <label>Term</label>
                <input type="text" name="term" value={data.term} onChange={handleChange} />
            </div>

            <div className="section-title">Date Logic</div>
            <div className="field">
                <label>Date of Submission</label>
                <input type="date" name="submissionDate" value={data.submissionDate} onChange={handleSubmissionDateChange} />
                <div className="quick-pick">
                    <button type="button" onClick={() => setDate(0)}>Today</button>
                    <button type="button" onClick={() => setDate(1)}>Tomorrow</button>
                </div>
            </div>
            <div className="field">
                <label>Date of Performance (auto: submission - 7 days)</label>
                <input type="date" name="performanceDate" value={data.performanceDate} onChange={handleChange} />
            </div>

            <button className="pdf-btn" onClick={onDownload}>Download Lab Cover PDF</button>
        </aside>
    );
}
