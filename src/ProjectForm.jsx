import React from 'react';
import { getDhakaDate } from './utils';
import AutocompleteInput from './AutocompleteInput';

export default function ProjectForm({ data, setData, onDownload }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleTeacherChange = (index, field, value) => {
        const newSubmittedTo = [...data.submittedTo];
        newSubmittedTo[index][field] = value;
        setData(prev => ({ ...prev, submittedTo: newSubmittedTo }));
    };

    const addTeacher = () => {
        setData(prev => ({
            ...prev,
            submittedTo: [...prev.submittedTo, { name: '', designation: 'Lecturer' }]
        }));
    };

    const removeTeacher = (index) => {
        const newSubmittedTo = [...data.submittedTo];
        newSubmittedTo.splice(index, 1);
        setData(prev => ({ ...prev, submittedTo: newSubmittedTo }));
    };

    const handleStudentChange = (index, field, value) => {
        const newSubmittedBy = [...data.submittedBy];
        newSubmittedBy[index][field] = value;
        setData(prev => ({ ...prev, submittedBy: newSubmittedBy }));
    };

    const addStudent = () => {
        setData(prev => ({
            ...prev,
            submittedBy: [...prev.submittedBy, { studentName: '', roll: '' }]
        }));
    };

    const removeStudent = (index) => {
        const newSubmittedBy = [...data.submittedBy];
        newSubmittedBy.splice(index, 1);
        setData(prev => ({ ...prev, submittedBy: newSubmittedBy }));
    };

    const setDate = (offset) => {
        const dateObj = getDhakaDate(offset);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = String(dateObj.getFullYear()).slice(-2);
        setData(prev => ({ ...prev, submissionDate: `${day}/${month}/${year}` }));
    };

    return (
        <aside className="form-card">
            <h2>Project Report Inputs</h2>
            <p className="subtitle">All fields are editable and live-sync to the project report preview.</p>

            <div className="section-title">Project Details</div>
            <div className="field">
                <label>Department</label>
                <input type="text" name="department" value={data.department} onChange={handleChange} />
            </div>
            <div className="field">
                <label>Project Title</label>
                <textarea rows="3" name="projectTitle" value={data.projectTitle} onChange={handleChange}></textarea>
            </div>
            <div className="field">
                <label>Submission Date</label>
                <input type="text" name="submissionDate" value={data.submissionDate} onChange={handleChange} />
            </div>

            <div className="section-title">Submitted To</div>
            {data.submittedTo.map((teacher, idx) => (
                <div key={idx} style={{ marginBottom: '16px', padding: '12px', background: '#f8fafd', borderRadius: '8px', border: '1px solid #e1e8f5' }}>
                    <div className="field">
                        <label>Teacher's Name {data.submittedTo.length > 1 ? `#${idx + 1}` : ''}</label>
                        <AutocompleteInput 
                            value={teacher.name} 
                            onChange={(value) => handleTeacherChange(idx, 'name', value)} 
                        />
                    </div>
                    <div className="field">
                        <label>Designation</label>
                        <select 
                            value={teacher.designation} 
                            onChange={(e) => handleTeacherChange(idx, 'designation', e.target.value)}
                        >
                            <option value="Teacher Assistant">Teacher Assistant</option>
                            <option value="Lecturer">Lecturer</option>
                            <option value="Associate Professor">Associate Professor</option>
                            <option value="Assistant Professor">Assistant Professor</option>
                            <option value="Professor">Professor</option>
                        </select>
                    </div>
                    {data.submittedTo.length > 1 && (
                        <button type="button" onClick={() => removeTeacher(idx)} style={{ color: 'red', cursor: 'pointer', border: 'none', background: 'none', padding: 0, fontSize: '13px', fontWeight: 'bold' }}>- Remove Teacher</button>
                    )}
                </div>
            ))}
            <button type="button" onClick={addTeacher} style={{ marginBottom: '16px', padding: '6px 12px', cursor: 'pointer', border: '1px dashed #70a8ff', background: '#f0f5ff', borderRadius: '6px', color: '#0d2a67', fontSize: '13px', fontWeight: 'bold' }}>+ Add Another Teacher</button>

            <div className="field">
                <label>Teacher's Department (Shared)</label>
                <input type="text" name="teacherDept" value={data.teacherDept} onChange={handleChange} />
            </div>

            <div className="section-title">Submitted By</div>
            {data.submittedBy.map((student, idx) => (
                <div key={idx} style={{ marginBottom: '16px', padding: '12px', background: '#fcfcfc', borderRadius: '8px', border: '1px solid #e1e8f5' }}>
                    <div className="field">
                        <label>Student Name {data.submittedBy.length > 1 ? `#${idx + 1}` : ''}</label>
                        <input 
                            type="text" 
                            value={student.studentName} 
                            onChange={(e) => handleStudentChange(idx, 'studentName', e.target.value)} 
                        />
                    </div>
                    <div className="field">
                        <label>Roll</label>
                        <input 
                            type="text" 
                            value={student.roll} 
                            onChange={(e) => handleStudentChange(idx, 'roll', e.target.value)} 
                        />
                    </div>
                    {data.submittedBy.length > 1 && (
                        <button type="button" onClick={() => removeStudent(idx)} style={{ color: 'red', cursor: 'pointer', border: 'none', background: 'none', padding: 0, fontSize: '13px', fontWeight: 'bold' }}>- Remove Student</button>
                    )}
                </div>
            ))}
            <button type="button" onClick={addStudent} style={{ marginBottom: '16px', padding: '6px 12px', cursor: 'pointer', border: '1px dashed #70a8ff', background: '#f0f5ff', borderRadius: '6px', color: '#0d2a67', fontSize: '13px', fontWeight: 'bold' }}>+ Add Another Student</button>

            <div className="two-col">
                <div className="field">
                    <label>Year (Shared)</label>
                    <input type="text" name="year" value={data.year} onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Semester (Shared)</label>
                    <input type="text" name="semester" value={data.semester} onChange={handleChange} />
                </div>
            </div>

            <button className="pdf-btn" onClick={onDownload}>Download Project Cover PDF</button>
        </aside>
    );
}
