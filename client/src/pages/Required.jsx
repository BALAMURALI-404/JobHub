import React, { useState } from 'react';


export default function Required() {
    const [jobRole, setJobRole] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [requirements, setRequirements] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const [jobType, setJobType] = useState('');
    const [skills, setSkills] = useState([]);

    const handleAddRequirement = () => {
        if (jobRole.trim() && yearsOfExperience.trim()) {
            setRequirements([...requirements, { jobRole, yearsOfExperience, jobType, skills }]);
            setJobRole('');
            setYearsOfExperience('');
            setShowForm(false);
        }
    };

    const handleAddSkill = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            setSkills([...skills, e.target.value.trim()]);
            e.target.value = '';
        }
    };

    const handleRemoveSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-gradient-to-br from-red-300  to-amber-200 min-h-screen">
            <header>
                <br/>
                <h1 className=" bg-gradient-to-r from-black to-20% text-amber-50 pl-2">Required/</h1>
            </header>
            <main>
                <div className="flex justify-end">
                    <button className="bg-gradient-to-tl from-gray-700 to-gray-500 text-white hover:bg-gradient-to-tl hover:from-amber-500 hover:to-amber-300 rounded-sm mr-10 hover:text-black p-2" onClick={() => setShowForm(!showForm)}>
                        {showForm ? 'Close Form' : 'Add Requirement'}
                    </button>
                </div>
                {showForm && (
                    <div className="w-[70vw] rounded-lg shadow-2xl align-middle bg-gradient-to-tl from-red-300  to-amber-200 p-4 mx-auto mt-4">
                        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                            <div className="w-full h-full">
                                <div className="mb-2">
                                    <label className="text-sm">Role:</label>
                                    <input className="text-sm border-2 rounded-sm border-black h-6 ml-2"
                                        type="text"
                                        value={jobRole}
                                        onChange={(e) => setJobRole(e.target.value)}
                                        placeholder="Enter job role"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm">Experience:</label>
                                    <input className="text-sm border-2 rounded-sm border-black h-6 ml-2"
                                        type="text"
                                        value={yearsOfExperience}
                                        onChange={(e) => setYearsOfExperience(e.target.value)}
                                        placeholder="Enter years of experience"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm">Job Type:</label>
                                    <select className="text-sm border-2 rounded-sm border-black h-6 ml-2" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                                        <option value="">Select job type</option>
                                        <option value="Full-time">Full Time</option>
                                        <option value="Part-time">Part Time</option>
                                        <option value="Intern">Intern</option>
                                        <option value="Work-from-home">Work From Home</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="text-sm">Skills:</label>
                                    <textarea className="text-sm border-2 rounded-sm border-black h-6 resize-none overflow-hidden ml-2"
                                        placeholder="Enter skills and press Enter"
                                        onKeyDown={handleAddSkill}
                                        rows={skills.length + 1}
                                    />
                                    <div className="mt-2">
                                        {skills.map((skill, index) => (
                                            <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer" onClick={() => handleRemoveSkill(index)}>
                                                {skill} &times;
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-2">
                                <button className="bg-gradient-to-tl from-gray-700 to-gray-500 text-white hover:bg-gradient-to-tl hover:from-amber-500 hover:to-amber-300 hover:text-black rounded-sm p-2" onClick={handleAddRequirement}>
                                    Add Requirement
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                <div className="mt-4">
                    {requirements.map((req, index) => (
                        <div key={index} className="mb-4 p-2 border rounded-sm bg-white shadow-sm">
                            <div className="text-sm font-semibold">{req.jobRole}</div>
                            <div className="text-sm">Years of Experience: {req.yearsOfExperience}</div>
                            <div className="text-sm">Job Type: {req.jobType}</div>
                            <div className="text-sm">Skills: {(req.skills || []).join(', ')}</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}