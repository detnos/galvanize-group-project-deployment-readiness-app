import React from 'react';
import UserLine from './UserLine';
import { Tree, TreeNode } from 'react-organizational-chart';
    

function WingTree(props) {
    let wgCC = props.users.filter(user => user.roleHeiararchy === 3 && user.roleId === 1);
    let ViceCC = props.users.filter(user => user.roleHeiararchy === 3 && user.roleId === 2);
    let CCC = props.users.filter(user => user.roleHeiararchy === 3 && user.roleId === 4);
    let GpCCs = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 1);
    let SqCCs = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 1);
    let vacantWgCC = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 1,
        roleHeiararchy: 3,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantVice = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 2,
        roleHeiararchy: 3,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantCCC = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 4,
        roleHeiararchy: 3,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantSqCC = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 4,
        roleHeiararchy: 3,
        phone: '',
        email: '',
        grade: '',
    };

    return (
        <Tree
            lineWidth={'2px'}
            lineHeight={'30px'}
            lineColor={'blue'}
            lineBorderRadius={'10px'}
            label={wgCC.length !== 0 ? <UserLine key={wgCC[0].id} user={wgCC[0]} roles={props.roles} /> : <UserLine key="1" user={vacantWgCC} roles={props.roles} />} 
        >
            <TreeNode label={ViceCC.length !== 0 ? <UserLine key={ViceCC[0].id} user={ViceCC[0]} roles={props.roles} /> : <UserLine key="1" user={vacantVice} roles={props.roles} />} />
                              
            {GpCCs.length !== 0 ? GpCCs.map((user, index) =>
                <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} children={
                    SqCCs.length !== 0 ? SqCCs.map((user, index) =>
                        <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} />
                    ) : <TreeNode label={<UserLine key={index} user={vacantSqCC} roles={props.roles} />
                    } />} />
            ) : ""}

            <TreeNode label={CCC.length !== 0 ? <UserLine key="1" user={CCC[0]} roles={props.roles} /> : <UserLine key="1" user={vacantCCC} roles={props.roles} /> } />
        </Tree>
    )
}

export default WingTree;