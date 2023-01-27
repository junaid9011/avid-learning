import React from 'react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { Content } from './component/List';
import './style.css'
export const Resource = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    
    return (
        <div>
             <div className="">
                <h1>Welcome to Your Desired Course</h1>
                <h4>A website is what we see when we enter a domain on the Internet through a browser. Websites are created by coding with programming languages. Follow this guideline to learn web development.</h4>
             </div>
             <br />
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                //   multiSelect
                sx={{ height: 500, flexGrow: 1, maxWidth: 800, overflowY: 'auto' }}
            >
                <TreeItem  nodeId="1" label="Applications">

                    <>
                        <TreeItem onClick={toggleDrawer("right", true)} nodeId="2" label="Calendar" />
                        <Drawer
                            anchor={"right"}
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                        >
                            <Content toggleDrawer={toggleDrawer} anchor={"right"}/>
                        </Drawer>
                    </>

                    <TreeItem nodeId="3" label="Chrome" />
                    <TreeItem nodeId="4" label="Webstorm" />
                </TreeItem>
                <TreeItem nodeId="5" label="Documents">
                    <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                            <TreeItem nodeId="9" label="tree-view.js" />
                        </TreeItem>
                    </TreeItem>
                </TreeItem>
            </TreeView>
        </div>
    )
}
