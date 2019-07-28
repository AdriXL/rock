package es.game.rest.application;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("rest")
public class Application extends ResourceConfig {
    public Application() {
        packages("es.game.rest");
        register(JacksonFeature.class);
    }
}
