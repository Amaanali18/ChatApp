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

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Controller
public class ChatController {

    @Autowired
    private RoomRepo roomRepo;

    // sent <-> receive messages
    @MessageMapping("/sendMessage/{roomId}") // connection when a msg is sent
    @SendTo("/topic/room/{roomId}") //subscribe to roomId for transfer of data
    public Message sendMessage(
            @DestinationVariable String roomId
            , @RequestBody MessageRequest msg
    ){
        Room room =  roomRepo.findByRoomId(roomId);
        Message response = new Message();
        if(msg.getMessage().length() > 500){
            throw new RuntimeException("Message too long");
        }
        response.setData(msg.getMessage());
        response.setSender(msg.getSender());
        response.setTimeStamp(LocalDateTime.now());
        if(room != null){
            //size limiter
            if(room.getMessages().size() >= 500){
                room.getMessages().removeFirst(); // remove oldest
            }
            room.getMessages().add(response);
            room.setExpiryTime(
                    Date.from(
                            Instant.now().plus(24, ChronoUnit.HOURS)
                    )
            );
            roomRepo.save(room);
        }
        return response;
    }

}
