const handleChange = (e) => {
    
}







const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({
        ...formData,
        [id]: value,
    });
;}



return (
    <form>
        <input type="text"
        placeholder="Enter UserName" 
        id="userName"
        />
        <input type="number"
        placeholder="Enter Age" 
        id="age"
        />
    </form>
)