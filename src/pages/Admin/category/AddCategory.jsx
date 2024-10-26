import toast from "react-hot-toast";
import { Link } from "react-router-dom";



const AddCategory = () => {
    const handleAddUser = async (event) => {
        event.preventDefault();
    
        const form = new FormData(event.currentTarget);
    
        const name = form.get("name");
        const photo = form.get("photo");
    
        const user = { name, photo };
        console.log(user);

        const data = new FormData()
        data.append("image", photo)
    
        let category = {};
    
       await fetch("https://api.imgbb.com/1/upload?key=a8a4820aece8b6506e8f58f65088e3a7",
          {
            method: "POST", body: data
          })
          .then(response => response.json())
          .then(data => {
            category = { name, photo: data.data.url,};
            console.log(category);
          })
    
    
        fetch("http://localhost:5000/addcategory", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(category),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              toast.success("User Added Successfully", {
                position: "top-right",
              });
            }
            event.target.reset();
          });
      };
      return (
        <>
          <div className="mx-auto mt-20">
            <div className="flex justify-center justify-items-center">
              <h1 className="text-3xl font-bold text-center mb-10">
              Add Product Category
              </h1>
              &nbsp;&nbsp;&nbsp;
              <Link to="/categorylist">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white 
              py-2 px-4 border border-blue-500 hover:border-transparent rounded-tl-md rounded-br-md"
                >
                  Category list
                </button>
              </Link>
            </div>
            <form onSubmit={handleAddUser} className="w-full ">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="name"
                  >
                    Category Name
                  </label>
                </div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="your name"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="photo">
                    Photo Url
                  </label>
                </div>
                <div className="md:w-1/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-gray-700 
                  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="photo"
                    type="file"
                    name="photo"
                    placeholder=""
                  />
                </div>
              </div>
    
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white 
                  font-bold py-2 px-4 rounded-none"
                    type="submit"
                  >
                    Add User
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      );
};

export default AddCategory;
