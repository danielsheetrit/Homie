import { EventAvailableRounded } from '@material-ui/icons';
import React, { Component } from 'react'

export class StayFilter extends Component {
    state = {
        currentBtnId: null,
        data: [{ id: 0, name: "Price" }, { id: 1, name: "Type of place" }, { id: 2, name: "Amenities", }, { id: 3, name: "Stay Rules" }]
    }

    //     componentDidMount(){
    //         let someInputRef = React.createRef()
    //     }

    //     someInputRef = React.createRef()
    // // In componentDidMount:
    // //(Or wherever you need the element)
    // this.someInputRef.current.focus()
    // // In render method:
    // <input ref={this.someInputRef} type="text" />

    componentDidMount() {
        // this.wrapperRef = React.createRef();
        document.addEventListener('mousedown', this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeModal);
    }

    toggleModal = (id) => {
        const currentBtnId = id !== this.state.currentBtnId ? id : null
        this.setState({ currentBtnId })
    };

    closeModal = (ev) => {
        console.log('closeModal', ev);
        // console.log('this.wrapperRef.current', this.wrapperRef.current);
        // console.log('this.wrapperRef', this.wrapperRef);
        // if (this.wrapperRef && !this.wrapperRef.current.contains(ev.target)) {
        //     alert('You clicked outside of me!');
        //     this.setState({ currentBtnId: null });
        // }
    }

    render() {
        return (
            <section className="stay-filter-2">
                <h2 className="filter-header">Filter Header</h2>
                <div className="btn-group flex">
                    {this.state.data.map((btn, idx) => {
                        return (
                            <>
                                <div key={idx} className="btn-container">
                                    <button className="btn" btnId={btn.id} onClick={() => this.toggleModal(btn.id)}>
                                        {btn.name}
                                    </button>
                                    {
                                        this.state.currentBtnId === btn.id ? (
                                            <Modal name={btn.name} id={btn.id} toggleModal={this.toggleModal} />
                                        ) : null}
                                </div>
                            </>
                        );
                    })}
                </div>
            </section>
        );
    }
}
const Modal = ({ name, id, toggleModal, closeModal }) => (
    <>
        {/* <div className="filter-modal-overlay" onClick={(ev) => { closeModal(ev) }}></div> */}
        {/* <div className="filter-modal-overlay" ref={this.wrapperRef} onClick={() => { toggleModal(id) }}></div> */}
        <div className="filter-modal flex column" onClick={(ev) => { ev.stopPropagation(); console.log('stopprop') }} style={{ position: 'absolute', color: 'red', zIndex: '2' }}>
            <p>THIS IS {name} MODAL</p>
            <div className="btn-container">
                <button onClick={() => { toggleModal(id) }}>Close</button>
                <button onClick={() => { toggleModal(id) }}>Update</button>
            </div>
        </div>
    </>

)











// import React, { Component } from 'react'
// import { Popper } from '@material-ui/core'
// import { FilterModal } from './FilterModal.jsx'

// export class StayFilter extends Component {
//     state = {
//         isModalOpen: false
//     }

//     openModal = (ev, type) => {
//         console.log('ev.target', ev.target, 'type', type);
//         this.setState({ isModalOpen: !this.state.isModalOpen })
//     }

//     closeModal = () => {
//         this.setState({ isModalOpen: false })
//     }

//     render() {
//         const { isModalOpen } = this.state
//         return (
//             <section className="stay-filter-2">
//                 <h2 className="filter-header">Filter Header</h2>
//                 <div className="btn-group">
//                     <button onClick={(ev) => { this.openModal(ev, 'price') }}>Price</button>
//                     <button onClick={(ev) => { this.openModal(ev, 'type') }}>Type of place</button>
//                     <button onClick={(ev) => { this.openModal(ev, 'amenities') }}>Amenities</button>
//                     <button onClick={(ev) => { this.openModal(ev, 'rules') }}>Stay Rules</button>
//                     {isModalOpen && <FilterModal closeModal={this.closeModal} />}
//                 </div>

//                 {/* <div className="dropdown-filter">Content
//                 {this.state.dropdownActive === 'price && <form>rrgrggrgrg</form>}
//                             {this.state.dropdownActive === 'type && <form>rrgrggrgrg</form>}
//                             {this.state.dropdownActive && <form>rrgrggrgrg</form>}
//                             {this.state.dropdownActive && <form>rrgrggrgrg</form>} */}


//             </section>
//         )
//     }
// }


































// import { Component } from 'react'
// import Modal from 'react-modal'

// // Modal.setAppElement('#root')
// Modal.setAppElement(document.querySelector('.btn-group'));

// export class StayFilter extends Component {

//     state = {
//         isOpenModal: false
//     }

//     openModal = () => {
//         this.setState({ isOpenModal: true }, () => {
//             console.log('open');
//         })
//     }
//     closeModal = () => {
//         this.setState({ isOpenModal: false }, () => {
//             console.log('close');
//         })
//     }

//     render() {
//         return (
//             <section className="stay-filter-2" >
//                 <h2 className="filter-header">Filter Header</h2>
//                 <div className="btn-group">
//                     <button onClick={this.openModal}>Open Modal</button>
//                     <Modal
//                         isOpen={this.state.isOpenModal}
//                         onRequestClose={this.closeModal}
//                         shouldCloseOnOverlayClick={true}
//                         overlayClassName="filter-overlay-modal"
//                         className="filter-modal"
//                     >
//                         <h2>Hello</h2>
//                         <div>I am a modal</div>

//                         <button onClick={this.closeModal}>close</button>
//                     </Modal>

//                     {/* 
//                     <ReactModal
//                         isOpen={this.state.showModal}
//                         contentLabel="onRequestClose Example"
//                         onRequestClose={this.handleCloseModal}
//                         shouldCloseOnOverlayClick={true}
//                     ></ReactModal> */}
//                 </div>
//             </section>
//         )
//     }
// }





// import React, { useState } from 'react';
// import { usePopper } from 'react-popper';

// export function StayFilter() {
//     const [referenceElement, setReferenceElement] = useState(null);
//     const [popperElement, setPopperElement] = useState(null);
//     const [arrowElement, setArrowElement] = useState(null);
//     const { styles, attributes } = usePopper(referenceElement, popperElement, {
//         modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
//     });

//     return (
//         <section className="stay-filter-2">
//             <h2 className="filter-header">Filter Header</h2>
//             <div className="btn-group">
//                 <button ref={setReferenceElement}>Click me</button>
//                 <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
//                     Popper element
//                 <div ref={setArrowElement} style={styles.arrow} />
//                 </div>
//             </div>
//         </section>
//     )
// }


// import React, { Component } from 'react';
// import { DropdownFilter } from './DropdownFilter.jsx';
// import { FilterBtn } from './FilterBtn.jsx'

// export function StayFilter() {

//     // const handleClick = (ev) => {
//     //     setAnchorEl(anchorEl ? null : ev.currentTarget);
//     // };

//     function openDropdown(ev) {
//         // console.log(props);
//         // this.setState({ dropdownActive: props }, () => {
//         //     console.log(this.state);
//         // })
//         // setAnchorEl(anchorEl ? null : ev.currentTarget);
//         console.log('openDropdown')
//     }

//     return (
//         <section className="stay-filter-2">
//             <h2 className="filter-header">Filter Header</h2>
//             <div className="btn-group">
//                 <FilterBtn openDropdown={openDropdown} />
//                 {/* <button aria-describedby={id} onClick={(ev) => { openDropdown(ev) }}>Price</button>
//                 <button aria-describedby={id} onClick={(ev) => { openDropdown(ev) }}>Type of place</button>
//                 <button aria-describedby={id} onClick={(ev) => { openDropdown(ev) }}>Amenities</button>
//                 <button aria-describedby={id} onClick={(ev) => { openDropdown(ev) }}>Stay Rules</button> */}
//                 {/* <DropdownFilter msg="Type a msg for display" /> */}

//             </div>
//         </section>
//     )

// }










// import React, { Component } from 'react';
// import { Popper } from '@material-ui/core';
// import { DropdownFilter } from './DropdownFilter.jsx'

// export class StayFilter extends Component {
//     state = {
//         anchorEl: null,
//         open: false
//     }
//     flipOpen = () => this.setState({ ...this.state, open: !this.state.open });
//     handleClick = ev => {

//         // this.state.anchorEl
//         //     ? this.setState({ anchorEl: null }) :
//         console.log('ev.currentTarget', ev.currentTarget)
//         this.setState({ anchorEl: ev.currentTarget }, () => {
//             console.log('this.state', this.state)
//         });

//         this.flipOpen();
//     };

//     render() {
//         console.log(this.state.anchorEl);
//         // console.log(this.state.open);
//         const id = this.state.open ? "simple-popper" : null

//         return (
//             <section className="stay-filter-2">
//                 <h2 className="filter-header">Filter Header</h2>
//                 <div className="btn-group">
//                     <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Price</button>
//                     <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Type of place</button>
//                     <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Amenities</button>
//                     <button aria-describedby={id} variant="contained" onClick={(ev) => { this.handleClick(ev) }}>Stay Rules</button>
//                     {/* <DropdownFilter msg="Type a msg for display" /> */}
//                 </div>
//                 <Popper id={id} open={this.state.open} anchorEl={this.state.anchorEl} >
//                     <div>Contenttttttttttttttttttttt
//                         {/* <div className="dropdown-filter">Content */}
//                         {/* {this.state.dropdownActive === 'price && <form>rrgrggrgrg</form>}
//                             {this.state.dropdownActive === 'type && <form>rrgrggrgrg</form>}
//                             {this.state.dropdownActive && <form>rrgrggrgrg</form>}
//                             {this.state.dropdownActive && <form>rrgrggrgrg</form>} */}
//                     </div>
//                 </Popper>
//             </section>
//         )
//     }
// }