
const SearchBlog = ({ searchTerm, setSearchTerm }) => {
    console.log(searchTerm);
    return (
        <div>
            <input type="text" placeholder="Search UserBlog"
                value={setSearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchBlog