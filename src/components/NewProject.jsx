import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;

        if (enterTitle.trim() === '' || enterDescription.trim() === '' || enterDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption={'Oaky'}>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button 
                            className="text-stone-800 hover:text-stone-9500"
                            onClick={onCancel}
                        >Cancel</button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md flex bg-stone-500 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}
                        >Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" isTextArea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}