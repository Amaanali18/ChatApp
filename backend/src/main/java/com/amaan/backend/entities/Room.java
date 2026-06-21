package com.amaan.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;

@Document(collection="chatrooms")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Room {
    @Id
    private String id; //given by mongodb in database
    private String roomId; //generated for multiple user interaction

    private ArrayList<Message> messages = new ArrayList<>();

    @Indexed(expireAfter = "0")
    private Date expiryTime;

}
