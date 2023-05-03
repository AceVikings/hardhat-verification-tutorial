// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

contract Storage {
    uint number;

    constructor(uint _initNumber) {
        number = _initNumber;
    }

    function setNumber(uint _number) external {
        number = _number;
    }

    function getNumber() external view returns (uint) {
        return number;
    }
}
