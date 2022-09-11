import React from 'react';
import './App.css';

import DragNDrop from './components/DragNDrop'

const data = [
    { title: 'To Do', items: ['Task 1','Task 2','Task 3','Task 4'], color:"#70cce1" },
    { title: 'In Progress', items: [ 'Task 5'],color:"#feff55" },
    { title: 'Inreview', items: ['Task 6', 'Task 7', 'Task 8'],color:"#e52c00" },
    { title: 'Done', items: ['Task 9', 'Task 10'],color:"#63c522" }
]

function App() {
    return (
        // <div classNameName="App">
        //   <header className="App-header">
        //   <DragNDrop data={data} />
        //   {/* <div className="drag-n-drop">
        //     {data.map((grp, grpI) => (
        //       <div key={grp.title} className="dnd-group">
        //         {grp.items.map((item, itemI) => (
        //           <div draggable key={item} className="dnd-item">
        //             {item}
        //           </div>
        //         ))}
        //       </div>
        //     ))}
        //     </div> */}

        //       {/* <div className="drag-n-drop">
        //         <div className="dnd-group">
        //           <div className="group-title">Group 1</div>
        //           <div className="dnd-item">
        //             <div>
        //               <p>ITEM 1</p>
        //             </div>
        //           </div>
        //           <div className="dnd-item">
        //             <div>
        //               <p>ITEM 2</p>
        //             </div>
        //           </div>
        //           <div className="dnd-item">
        //             <div>
        //               <p>ITEM 3</p>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="dnd-group">
        //         <div className="group-title">Group 1</div>
        //           <div className="dnd-item">
        //             <div>
        //               <p>ITEM 1</p>
        //             </div>
        //           </div>
        //           <div className="dnd-item">
        //             <div>
        //               <p>ITEM 2</p>
        //             </div>
        //           </div>
        //         </div>
        //       </div> */}
        //   </header>
        // </div>
        <div className="page-body">
            <div className="page-container">
                <div className="sidebar-menu">
                    <div className="sidebar-menu-inner">
                        <header className="logo-env">
                        </header>
                        <ul id="main-menu" className="main-menu">
                            <li>
                                <a href="index.html">
                                   
                                    <span className="title">Tabs1</span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className="title">Dashboard 1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="title">Dashboard 2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="title">Dashboard 3</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="layout-api.html">                                 
                                    <span className="title">Tabs2</span>
                                </a>
                            </li>
                            <li>
                                <a href="ui-panels.html">                                   
                                    <span className="title">Tabs3</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <div>
                        <div className="App">
                            <div className="row">
                                <div className="drag-n-drop">
                                    <DragNDrop data={data} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
