package com.qpact.cvviewer.model.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories("com.qpact.cvviewer.model")
@EntityScan("com.qpact.cvviewer.model")
public class ModelConfig {
}
