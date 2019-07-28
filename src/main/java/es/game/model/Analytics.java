package es.game.model;

import com.google.gson.JsonObject;

public class Analytics {
	
	private int rounds = 0;
	private int player1TotalWins = 0;
	private int player2TotalWins = 0;
	private int totalDraws = 0;
	
	public Analytics() {
		this.rounds = 0;
		this.player1TotalWins = 0;
		this.player2TotalWins = 0;
		this.totalDraws = 0;
	}
	
	private void player1Wins() {
		this.rounds++;
		this.player1TotalWins++;
	}
	
	private void player2Wins() {
		this.rounds++;
		this.player2TotalWins++;
	}
	
	private void draw() {
		this.rounds++;
		this.totalDraws++;
	}
	
	synchronized public void updateRound(JsonObject round) throws InterruptedException {
		// Thread.sleep(5000); // for testing purposes (synchronization, etc.)
		
		int result = round.get("player1").getAsInt() - round.get("player2").getAsInt();
		
		if (result == 0) {
			draw();
		}
		else if (result == 1 || result == -2) {
			player1Wins();
		}
		else {
			player2Wins();
		}
	}
	
	public JsonObject toJson() {
		JsonObject info = new JsonObject();
		
		info.addProperty("Total Rounds", this.rounds);
		info.addProperty("Player1 Total Wins", this.player1TotalWins);
		info.addProperty("Player2 Total Wins", this.player2TotalWins);
		info.addProperty("Total Draws", this.totalDraws);
		
		return info;
	}

}
