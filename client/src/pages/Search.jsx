import { useState } from 'react';

export default function Search() {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [results, setResults] = useState([]);

    const jobList = [
        { name: 'TechCorp', designation: 'Software Engineer', experience: 5, contact: 'contact@techcorp.com', details: 'Develop and maintain software applications.' },
        { name: 'DataWorks', designation: 'Data Scientist', experience: 3, contact: 'contact@dataworks.com', details: 'Analyze and interpret complex data sets.' },
        { name: 'Productify', designation: 'Product Manager', experience: 7, contact: 'contact@productify.com', details: 'Oversee product development from conception to launch.' },
        { name: 'DesignHub', designation: 'UX Designer', experience: 4, contact: 'contact@designhub.com', details: 'Design user-friendly interfaces and experiences.' },
        { name: 'DevOps Solutions', designation: 'DevOps Engineer', experience: 6, contact: 'contact@devopssolutions.com', details: 'Manage and automate infrastructure and deployment processes.' },
        { name: 'Innovatech', designation: 'Software Engineer', experience: 2, contact: 'contact@innovatech.com', details: 'Assist in developing software solutions and applications.' },
        { name: 'AI Labs', designation: 'Data Scientist', experience: 4, contact: 'contact@ailabs.com', details: 'Work on AI and machine learning projects.' },
        { name: 'ManageIt', designation: 'Product Manager', experience: 5, contact: 'contact@manageit.com', details: 'Coordinate product strategy and execution.' },
        { name: 'Creative Minds', designation: 'UX Designer', experience: 3, contact: 'contact@creativeminds.com', details: 'Create engaging and intuitive user designs.' },
        { name: 'CloudNet', designation: 'DevOps Engineer', experience: 8, contact: 'contact@cloudnet.com', details: 'Ensure reliable and efficient cloud infrastructure.' }
    ];

    const handleSearch = () => {
        const filteredResults = jobList.filter(job => 
            job.name.toLowerCase().includes(query.toLowerCase()) &&
            (filter ? job.designation === filter : true)
        );
        setResults(filteredResults);
    };

    return (
        <div className="bg-gradient-to-br from-red-300 to-amber-200 min-h-screen">
            <div className="pt-3 flex justify-center items-center">
                <input className="w-[30vw] h-[5vh] bg-gray-200 rounded-sm" type="text" placeholder="   Search for jobs..." value={query} 
                onChange={(e) => setQuery(e.target.value)}/>
                <select className="w-[10vw] h-[5vh] bg-gray-200 rounded-sm ml-2" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                </select>
                <button className="w-[10vw] h-[5vh] rounded-sm bg-blue-200 hover:bg-gradient-to-tl hover:from-amber-500 hover:to-amber-300 ml-2" onClick={handleSearch}>Search</button>
            </div>
            <div className="mt-4 flex justify-center">
                <div className="grid grid-cols-1 gap-4">
                    {results.map((result, index) => (
                        <div key={index} className="p-4 rounded w-[80vw] shadow-lg bg-gradient-to-br from-amber-400 to-amber-200 transform transition-transform duration-300 hover:scale-103 hover:shadow-2xl">
                            <h3 className="text-3xl font-semibold">{result.designation}</h3>
                            <p>Company: {result.name}</p>
                            <p>Designation: {result.designation}</p>
                            <p>Years of Experience Required: {result.experience}</p>
                            <p className="font-semibold">Contact: contact@{result.name.toLowerCase().replace(/\s+/g, '')}.com</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}