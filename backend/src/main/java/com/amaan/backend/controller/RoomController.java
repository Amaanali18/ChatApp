package com.amaan.backend.controller;

import com.amaan.backend.entities.Message;
import com.amaan.backend.entities.Room;
import com.amaan.backend.repository.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomRepo roomRepo;

    // create room
    @PostMapping("/create")
    public ResponseEntity<?> createRoom(@RequestBody String data) {

        if(roomRepo.findByRoomId(data) != null){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Room already exists");
        }

        Room room = new Room();
        room.setRoomId(data);
        roomRepo.save(room);
        return ResponseEntity.status(HttpStatus.CREATED).body(room);

    }

    // get room
    @GetMapping("/{roomId}")
    public ResponseEntity<?> getRoom(@PathVariable String roomId) {
        Room room = roomRepo.findByRoomId(roomId);
        if(room == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Room not found");
        }
        return ResponseEntity.ok(room);
    }

    // get messages of room
    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String roomId,
        // pagination
        @RequestParam(value="page",defaultValue = "0",required = false) int page,
        @RequestParam(value="size",defaultValue = "15",required = false) int size

    ) {
        Room  room = roomRepo.findByRoomId(roomId);
        if(room == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ArrayList<>());
        }
        List<Message> messages = room.getMessages();
        // pagination logic
        int start = Math.max(0, messages.size()-(page+1)*size);
        int end = Math.min(start+size,messages.size());
        return ResponseEntity.ok(messages.subList(start, end));
    }
}
