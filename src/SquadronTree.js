import React from 'react';
import UserLine from './UserLine';
import { Tree, TreeNode } from 'react-organizational-chart';

function SquadronTree(props) {
    console.log("Beginning assignment")
    let sqCC = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 1);
    let shirt = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 7);
    let deputyCC = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 3);
    let flightCCs = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 6);
    let CEM = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 8);
    let SEM = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 9);
    let NCOICs = props.users.filter(user => user.roleHeiararchy === 5 && user.roleId === 10);
    console.log("ending assignment")

    let vacantSqCC = {
        firstName: 'VACANT',
        lastName: '',
        unit: '',
        afsc: '',
        roleId: 1,
        roleHeiararchy: 5,
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
    let vacantFlightCC = {
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
            label={sqCC.length !== 0 ? <UserLine key={sqCC[0].id} user={sqCC[0]} roles={props.roles} /> : <UserLine key="1" user={vacantSqCC} roles={props.roles} />}
        >
        
            <TreeNode label={deputyCC.length !== 0 ? <UserLine key={deputyCC[0].id} user={deputyCC[0]} roles={props.roles} /> : <UserLine key="1" user={vacantDeputy} roles={props.roles} />} />
            <TreeNode label={CEM.length !== 0 ? <UserLine key="1" user={CEM[0]} roles={props.roles} /> : SEM.length !== 0 ? <UserLine key="1" user={SEM[0]} roles={props.roles} /> : <UserLine key="1" user={vacantCEM} roles={props.roles} /> } />
            {flightCCs.length !== 0 ? flightCCs.map((user, index) =>
                <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} children={
                    NCOICs.length !== 0 ? NCOICs.map((user, index) =>
                        <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} />
                    ) : <TreeNode label={<UserLine key={index} user={vacantNCOIC} roles={props.roles} />
                    } />} />
            ) : <TreeNode label={<UserLine key="99" user={vacantFlightCC} roles={props.roles} />} children={
                NCOICs.length !== 0 ? NCOICs.map((user, index) =>
                    <TreeNode label={<UserLine key={index} user={user} roles={props.roles} />} />
                ) : <TreeNode label={<UserLine key="99" user={vacantNCOIC} roles={props.roles} />
                } />} />}
            
            <TreeNode label={shirt.length !== 0 ? <UserLine key="1" user={shirt[0]} roles={props.roles} /> : <UserLine key="1" user={vacantShirt} roles={props.roles} />} />
        </Tree>        
    )
}

export default SquadronTree;