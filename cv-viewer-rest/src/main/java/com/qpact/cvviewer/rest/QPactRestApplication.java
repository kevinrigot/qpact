package com.qpact.cvviewer.rest;

import com.qpact.cvviewer.model.config.ModelConfig;
import org.openapitools.configuration.OpenAPIDocumentationConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({OpenAPIDocumentationConfig.class, ModelConfig.class})
public class QPactRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(QPactRestApplication.class, args);
	}

}
