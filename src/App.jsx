import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import AssignmentForm from './AssignmentForm';
import AssignmentPreview from './AssignmentPreview';
import LabForm from './LabForm';
import LabPreview from './LabPreview';
import ProjectForm from './ProjectForm';
import ProjectPreview from './ProjectPreview';
import TelephoneIndex from './TelephoneIndex';
import Footer from './Footer';
import { downloadPDF, getDhakaDate } from './utils';
import './index.css';

export default function App() {
    const [activeMode, setActiveMode] = useState('assignment');

    const [assignmentData, setAssignmentData] = useState({
        department: 'Computer Science and Engineering',
        assignmentNo: '',
        topic: '',
        submissionDate: '',
        submittedTo: [
            { name: '', designation: 'Lecturer' }
        ],
        teacherDept: 'Department of Computer Science and Engineering',
        submittedBy: [
            { studentName: 'MD. SHAHIDUR RAHMAN', roll: '2207103' }
        ],
        year: '3rd',
        semester: '1st'
    });

    const [labData, setLabData] = useState({
        courseNo: 'CSE ',
        department: 'Department Of Computer Science and Engineering',
        experimentNo: '',
        experimentName: '',
        studentName: 'MD. SHAHIDUR RAHMAN',
        roll: '2207103',
        group: 'B2',
        year: '3rd',
        term: '1st',
        submissionDate: '',
        performanceDate: ''
    });

    const [projectData, setProjectData] = useState({
        department: 'Computer Science and Engineering',
        projectTitle: '',
        submissionDate: '',
        submittedTo: [
            { name: '', designation: 'Lecturer' }
        ],
        teacherDept: 'Department of Computer Science and Engineering',
        submittedBy: [
            { studentName: 'MD. SHAHIDUR RAHMAN', roll: '2207103' }
        ],
        year: '3rd',
        semester: '1st'
    });

    useEffect(() => {
        // Initialize dates
        const dateObj = getDhakaDate(0);
        
        // Assignment initial date
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = String(dateObj.getFullYear()).slice(-2);
        setAssignmentData(prev => ({ ...prev, submissionDate: `${day}/${month}/${year}` }));
        setProjectData(prev => ({ ...prev, submissionDate: `${day}/${month}/${year}` }));

        // Lab initial dates
        const yyyy = dateObj.getFullYear();
        const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
        const dd = String(dateObj.getDate()).padStart(2, '0');
        const subDateStr = `${yyyy}-${mm}-${dd}`;
        
        const subDateObj = new Date(subDateStr + 'T00:00:00');
        subDateObj.setDate(subDateObj.getDate() - 7);
        const perfDateStr = subDateObj.toISOString().slice(0, 10);
        
        setLabData(prev => ({ ...prev, submissionDate: subDateStr, performanceDate: perfDateStr }));
    }, []);

    const handleDownloadAssignment = () => {
        downloadPDF('assignment-page', 'KUET_Assignment_Cover_Page.pdf');
    };

    const handleDownloadLab = () => {
        downloadPDF('lab-page', 'KUET_Lab_Cover_Page.pdf');
    };

    const handleDownloadProject = () => {
        downloadPDF('project-page', 'KUET_Project_Cover_Page.pdf');
    };

    return (
        <div className="app">
            <Hero activeMode={activeMode} setActiveMode={setActiveMode} />

            {activeMode === 'assignment' && (
                <section className="workspace active">
                    <AssignmentForm 
                        data={assignmentData} 
                        setData={setAssignmentData} 
                        onDownload={handleDownloadAssignment} 
                    />
                    <AssignmentPreview data={assignmentData} />
                </section>
            )}

            {activeMode === 'lab' && (
                <section className="workspace active">
                    <LabForm 
                        data={labData} 
                        setData={setLabData} 
                        onDownload={handleDownloadLab} 
                    />
                    <LabPreview data={labData} />
                </section>
            )}

            {activeMode === 'project' && (
                <section className="workspace active">
                    <ProjectForm 
                        data={projectData} 
                        setData={setProjectData} 
                        onDownload={handleDownloadProject} 
                    />
                    <ProjectPreview data={projectData} />
                </section>
            )}

            {activeMode === 'index' && (
                <section className="workspace active" style={{ display: 'block' }}>
                    <TelephoneIndex />
                </section>
            )}

            <Footer />
        </div>
    );
}
