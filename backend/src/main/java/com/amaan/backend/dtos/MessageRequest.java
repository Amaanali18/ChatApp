package com.amaan.backend.dtos;

import lombok.*;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageRequest {
    private String message;
    private String sender;
    private LocalDateTime timestamp;
}
