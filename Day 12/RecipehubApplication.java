package com.jeeva;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "RecipeHub",
				version = "1.1.2",
				description = "",
				contact = @Contact(
						name = "Jeeva Perumal",
						email = "iamjeeva2002@gmail.com"
						)
				)
		)
@SpringBootApplication
public class RecipehubApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecipehubApplication.class, args);
	}

}
