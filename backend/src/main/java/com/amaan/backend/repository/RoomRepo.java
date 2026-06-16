package com.amaan.backend.repository;

import com.amaan.backend.entities.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepo extends MongoRepository<Room, String> {

    // get room by roomId
    Room findByRoomId(String roomId);

}
