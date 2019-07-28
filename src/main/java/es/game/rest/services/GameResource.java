package es.game.rest.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.JsonObject;

import es.game.model.Analytics;

@Path("/game")
public class GameResource {
	
	static Analytics info = new Analytics();

	@GET
	@Path("/round")
	@Produces({ MediaType.APPLICATION_JSON + ";charset=utf-8" })
	public Response getRound() throws Exception {
		
		JsonObject round = new JsonObject();
		round.addProperty("player1", (int) Math.floor(Math.random() * 3)); // player 1 random choice
		round.addProperty("player2", (int) Math.floor(Math.random() * 3)); // player 2 random choice

		round.addProperty("player" + (int) Math.floor(Math.random() * 2 + 1), 0); // one random player is forced to select rock
		
		info.updateRound(round); // statistics are updated

		Thread.sleep(1000); // simulation for some work (network latency, etc.)

		// round info is sent
		return Response.ok(round.toString())
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").allow("OPTIONS").build();
	}
	
	@GET
	@Path("/info")
	@Produces({ MediaType.APPLICATION_JSON + ";charset=utf-8" })
	public Response getAnalyticsInfo() throws Exception {
		
		// analytics info is sent
		return Response.ok(info.toJson().toString())
				.header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").allow("OPTIONS").build();
	}

}
