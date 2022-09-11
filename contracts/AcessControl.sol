// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract AccessControlBro {
    event GrantRole(bytes32 indexed role, address indexed account);
    event RevokeRole(bytes32 indexed role, address indexed account);

    //role => aacount => bool
    mapping(bytes32 => mapping(address => bool)) public roles;

    bytes32 private constant PREMIUM = keccak256(abi.encodePacked("PREMIUM"));
    bytes32 private constant FREE = keccak256(abi.encodePacked("FREE"));

    modifier onlyRole(bytes32 _role){
        require(roles[_role][msg.sender], "not authorized");
        _;
    }

    constructor() {
        _grantRole(PREMIUM, msg.sender);
        _grantRole(FREE, msg.sender);
    }
//for set firt PREMIUM
    function _grantRole(bytes32 _role, address _account) internal {
        //means to this role for this account set it equal to true
        roles[_role][_account] = true;
        emit GrantRole(_role, _account);
    }

    function grantRole(bytes32 _role, address _account) external onlyRole(PREMIUM){
        _grantRole(_role,_account);
    }

    function revokeRole(bytes32 _role, address _account) external onlyRole(PREMIUM){
        roles[_role][_account] = false;
        emit RevokeRole(_role, _account);
    }

}