// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./AcessControl.sol";

contract ContractNFT is ERC1155, AccessControlBro {
    bytes32 public constant PREMIUM_ROLE = keccak256("PREMIUM_ROLE");
    bytes32 public constant FREE_ROLE = keccak256("FREE_ROLE");

    constructor() ERC1155("") {
        _grantRole(PREMIUM_ROLE, msg.sender);
        _grantRole(FREE_ROLE, msg.sender);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyRole(PREMIUM_ROLE)
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyRole(PREMIUM_ROLE)
    {
        _mintBatch(to, ids, amounts, data);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC1155)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}