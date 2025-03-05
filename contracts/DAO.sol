// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

contract SheFundDAO {
    struct Proposal {
        uint256 id;
        string courseName;
        string courseIPFSHash;
        address creator;
        uint256 votesFor;
        uint256 votesAgainst;
        bool finalized;
        bool approved;
    }

    address public owner;
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public votes; // Track if a member has voted on a proposal
    mapping(address => bool) public daoMembers; // Track DAO membership

    event ProposalCreated(uint256 id, string courseName, address indexed creator);
    event Voted(uint256 indexed proposalId, address indexed voter, bool voteFor);
    event ProposalFinalized(uint256 indexed proposalId, bool approved);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier onlyDaoMember() {
        require(daoMembers[msg.sender], "Not a DAO member");
        _;
    }

    constructor() {
        owner = msg.sender;
        daoMembers[msg.sender] = true; // Owner is the first DAO member
    }

    // Add DAO members
    function addMember(address member) external onlyOwner {
        daoMembers[member] = true;
    }

    // Remove DAO members
    function removeMember(address member) external onlyOwner {
        daoMembers[member] = false;
    }

    // Propose a course
    function proposeCourse(string memory courseName, string memory courseIPFSHash) external {
        proposalCount++;
        proposals[proposalCount] = Proposal({
            id: proposalCount,
            courseName: courseName,
            courseIPFSHash: courseIPFSHash,
            creator: msg.sender,
            votesFor: 0,
            votesAgainst: 0,
            finalized: false,
            approved: false
        });

        emit ProposalCreated(proposalCount, courseName, msg.sender);
    }

    // Vote on a proposal
    function voteOnProposal(uint256 proposalId, bool voteFor) external onlyDaoMember {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.finalized, "Proposal finalized");
        require(!votes[proposalId][msg.sender], "Already voted");

        votes[proposalId][msg.sender] = true;

        if (voteFor) {
            proposal.votesFor++;
        } else {
            proposal.votesAgainst++;
        }

        emit Voted(proposalId, msg.sender, voteFor);
    }

    // Finalize the proposal
    function finalizeProposal(uint256 proposalId) external onlyOwner {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.finalized, "Proposal already finalized");

        proposal.finalized = true;
        proposal.approved = (proposal.votesFor > proposal.votesAgainst);

        emit ProposalFinalized(proposalId, proposal.approved);
    }

    // Fetch proposals
    function getProposal(uint256 proposalId) external view returns (Proposal memory) {
        return proposals[proposalId];
    }
}