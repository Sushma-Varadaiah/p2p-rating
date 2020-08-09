pragma solidity >=0.4.22 <0.7.0;

contract Ratings {

    struct Rating {
        uint256 ratingCount;
        uint256 timestamp;
    }

    mapping(address => mapping(address => uint8)) public ratingsPerUser;

    mapping (address => Rating) public ratings;

	event RateUser(address indexed _addr, uint8 _rating);
    
    // Rate a particular user
    // @param _addr - address of the user you want to rate
    //        _rating - rating for that user
    // @returns true - If the rating process is successful.
    function rateUser (address _addr, uint8 _rating) external returns(bool) {
        // User can rate only between 1 to 5
        require(_rating > 0 && _rating <= 5); 
        
        // One particular user can rate some other user only once
        require(ratingsPerUser[_addr][msg.sender] == 0); 
        
        // Update the rating of the user
        ratingsPerUser[_addr][msg.sender] = _rating;
        
        //Update the timestamp
        ratings[_addr].timestamp = now;
        
        // Returns the total number of ratings for a particular user
        ratings[_addr].ratingCount++;
        
		emit RateUser(_addr, _rating);
        return true;
    }
    
    // Get the rating for a particular user
    // @param _addr - address of the user account 
    // @returns rating of the user and the timestamp
    function getUserRatings(address _addr) public view returns(uint8,uint256){
        return (ratingsPerUser[_addr][msg.sender],ratings[_addr].timestamp);
    }
    
    // Get to know whether a user rated another user or not.
    // @param _user1 - address of the user
    //        _user2 - address of the user
    // @returns the rating that is given from _user1 to _user2
    function ratingDetails(address _user1, address _user2) public view returns(uint256){
        return ratingsPerUser[_user1][_user2];
    } 
}