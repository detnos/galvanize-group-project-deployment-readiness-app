import React from 'react';
import UserLine from './UserLine';
import { Tree, TreeNode } from 'react-organizational-chart';

function GroupTree(props) {
    let gpCC = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 1);
    let shirt = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 7);
    let viceCC = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 2);
    let deputyCC = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 3);
    let sectionCCs = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 6);
    let CEM = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 8);
    let SEM = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 9);
    let NCOICs = props.users.filter(user => user.roleHeiararchy === 4 && user.roleId === 10);

    let vacantGpCC = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 1,
        roleHeiararchy: 4,
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
        roleHeiararchy: 4,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantDeputy = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 3,
        roleHeiararchy: 5,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantShirt = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 7,
        roleHeiararchy: 5,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantSectionCC = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 6,
        roleHeiararchy: 5,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantCEM = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 8,
        roleHeiararchy: 5,
        phone: '',
        email: '',
        grade: '',
    };
    let vacantNCOIC = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 10,
        roleHeiararchy: 5,
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
            label={gpCC.length !== 0 ? <UserLine key={gpCC[0].id} user={gpCC[0]} roles={props.roles} /> : <UserLine key="1" user={vacantGpCC} roles={props.roles} />}
        >

            <TreeNode label={deputyCC.length !== 0 ? <UserLine key={deputyCC[0].id} user={deputyCC[0]} roles={props.roles} /> : viceCC.length !== 0 ? <UserLine key={viceCC[0].id} user={viceCC[0]} roles={props.roles} /> : <UserLine key="1" user={vacantDeputy} roles={props.roles} />} />
            <TreeNode label={CEM.length !== 0 ? <UserLine key="1" user={CEM[0]} roles={props.roles} /> : SEM.length !== 0 ? <UserLine key="1" user={SEM[0]} roles={props.roles} /> : <UserLine key="1" user={vacantCEM} roles={props.roles} />} />
            {sectionCCs.length !== 0 ? sectionCCs.map((user, index) =>
                <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} children={
                    NCOICs.length !== 0 ? NCOICs.map((user, index) =>
                        <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} />
                    ) : <TreeNode label={<UserLine key={index} user={vacantNCOIC} roles={props.roles} />
                    } />} />
            ) : <TreeNode label={<UserLine key="99" user={vacantSectionCC} roles={props.roles} />} children={
                NCOICs.length !== 0 ? NCOICs.map((user, index) =>
                    <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} />
                ) : <TreeNode label={<UserLine key="99" user={vacantNCOIC} roles={props.roles} />
                } />} />}

            <TreeNode label={shirt.length !== 0 ? <UserLine key="1" user={shirt[0]} roles={props.roles} /> : <UserLine key="1" user={vacantShirt} roles={props.roles} />} />
        </Tree>
    )
}

export default GroupTree;