package com.amaan.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocket implements WebSocketMessageBrokerConfigurer {

    @Value("${frontend_url}")
    private String frontendUrl;

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic"); //websocket connection
        registry.setApplicationDestinationPrefixes("/app"); //restapi endpoint
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // websocket endpoint , every data transfer will flow from here
        registry.addEndpoint("/chat")
                .setAllowedOrigins(frontendUrl)
                .withSockJS();
    }

}
