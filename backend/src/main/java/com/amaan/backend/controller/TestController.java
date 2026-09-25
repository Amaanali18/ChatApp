package com.amaan.backend.controller;

import com.amaan.backend.entities.Room;
import com.amaan.backend.repository.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
    public class TestController {

        @Autowired
        private RoomRepo roomRepo;

        @GetMapping("/test")
        public String test() {
            roomRepo.save(new Room("debug-room"));
            return "saved";
        }
    }