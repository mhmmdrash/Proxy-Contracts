//SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "./box.sol";
import "@openzeppelin/upgrades/contracts/upgradeability/ProxyFactory.sol";

contract StoreFactory is ProxyFactory {
    address public impl;
    address public owner;
    address[] public clones;

    modifier OnlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor(address _impl) public {
        impl = _impl;
        owner = msg.sender;
    } 

    function cloneStore() public OnlyOwner {
        address clone = deployMinimal(impl, "");
        clones.push(clone);
        Box(clone).store(42);
    }

    function getAddress(uint i) public view returns(address) {
        return clones[i];
    }
}