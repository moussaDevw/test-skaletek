import { Fragment, useEffect, useState } from "react"
import './styles.css'
export const InputSearch = ({ activities, setFilteredActivities }) => {

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        const filtered = activities.filter(activity =>
        activity.activity?.toLowerCase().includes(searchTerm?.toLowerCase())
        );
        
        // I use a setFilteredActivities callback to send the data to the parent component
        setFilteredActivities(filtered);
        
    }, [activities, searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Fragment>
            <input value={searchTerm}  onChange={handleSearchChange} />
        </Fragment>
    )
}