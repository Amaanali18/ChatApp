package com.amaan.backend.controller;

import com.amaan.backend.dtos.MessageRequest;
import com.amaan.backend.entities.Message;
import com.amaan.backend.entities.Room;
import com.amaan.backend.repository.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Controller
public class ChatController {

    @Autowired
    private RoomRepo roomRepo;

    // sent <-> receive messages
    @MessageMapping("/sendMessage/{roomId}") // connection when a msg is sent
    @SendTo("/api/room/{roomId}") //subscribe to roomId for transfer of data
    public Message sendMessage(
            @DestinationVariable String roomId
            , @RequestBody MessageRequest msg
    ){
        Room room =  roomRepo.findByRoomId(roomId);
        Message response = new Message();
        response.setData(msg.getMessage());
        response.setSender(msg.getSender());
        response.setTimeStamp(LocalDateTime.now());
        if(room != null){
            room.getMessages().add(response);
            roomRepo.save(room);
        }
        return response;
    }

}
