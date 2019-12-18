package com.lijie;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


/**
 * @author lijie
 * Describe：启动类
 */
@SpringBootApplication
@EnableTransactionManagement
@EnableWebMvc
@EnableScheduling
public class MyBlogApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(MyBlogApplication.class, args);
	}

	@Override    
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {        
		return builder.sources(MyBlogApplication.class);    
	}

//	配置http自动转向https
//	@Component
//	public static class CustomServletContainer implements EmbeddedServletContainerCustomizer {
//
//		@Override
//		public void customize(ConfigurableEmbeddedServletContainer container) {
//			container.setPort(443);
//			container.setSessionTimeout(120, TimeUnit.MINUTES);
//		}
//	}
//
//	@Bean
//	public EmbeddedServletContainerFactory servletContainerFactory(){
//		TomcatEmbeddedServletContainerFactory tomcat = new TomcatEmbeddedServletContainerFactory() {
//			@Override
//			protected void postProcessContext(Context context) {
//				SecurityConstraint securityConstraint = new SecurityConstraint();
//				securityConstraint.setUserConstraint("CONFIDENTIAL");
//				SecurityCollection collection = new SecurityCollection();
//				collection.addPattern("/*");
//				securityConstraint.addCollection(collection);
//				context.addConstraint(securityConstraint);
//			}
//		};
//
//		tomcat.addAdditionalTomcatConnectors(httpConnector());
//		return tomcat;
//	}
//
//	@Bean
//	public Connector httpConnector(){
//		Connector connector = new Connector("org.apache.coyote.http11.Http11NioProtocol");
//		connector.setScheme("http");
//		connector.setPort(80);
//		//设置为false，则会自动从http跳转到https
//		connector.setSecure(false);
//		connector.setRedirectPort(443);
//		return connector;
//	}
}
