"use client";

export default function FieldForm({geometry}){
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Geometry is :", geometry);
        

    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="field name"
            />
            <textarea 
            type="text"
            placeholder="field description"
            />
            <button
            type="submit">
                Create Field
            </button>
        </form>
    )
}
