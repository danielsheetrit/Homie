export function FilterModal({ children, shown, closeModal }) {
    // return shown ? (
    //     <section className="filter-modal">
    //         <p>FilterModal</p>
    //         <button onClick={closeModal}>X</button>
    //     </section>
    // ) : null


    return shown ? (
        <div
            className="modal-backdrop"
            onClick={() => {
                // close modal when outside of modal is clicked
                closeModal();
            }}
        >
            <div
                className="modal-content"
                onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}
            >
                <button onClick={closeModal}>Close</button>
                {children}
            </div>
        </div>
    ) : null;
}