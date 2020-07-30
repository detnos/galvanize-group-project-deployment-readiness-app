import React from 'react';
import UserLine from './UserLine';
import { Tree, TreeNode } from 'react-organizational-chart';

const StyledTree = (props) => (
    <Tree
        lineWidth={'2px'}
        lineHeight={'30px'}
        lineColor={'blue'}
        lineBorderRadius={'10px'}
        label={<UserLine key="1" user={props.users[0]} roles={props.roles} />}
    >
        <TreeNode label={<UserLine key="1" user={props.users[1]} roles={props.roles} />}>
            <TreeNode label={<UserLine key="1" user={props.users[2]} roles={props.roles} />} />
        </TreeNode>
        <TreeNode label={<div> </div>}>
            <TreeNode label={<div></div>}>
                <TreeNode label={<UserLine key="1" user={props.users[3]} roles={props.roles} />} />
                <TreeNode label={<UserLine key="1" user={props.users[3]} roles={props.roles} />} />
            </TreeNode>
        </TreeNode>
        <TreeNode label={<UserLine key="1" user={props.users[1]} roles={props.roles} />}>
            <TreeNode label={<UserLine key="1" user={props.users[2]} roles={props.roles} />} />
            <TreeNode label={<UserLine key="1" user={props.users[2]} roles={props.roles} />} />
        </TreeNode>
    </Tree>
);

export default StyledTree;