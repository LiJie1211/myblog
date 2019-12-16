package com.lijie.service;

import com.lijie.mapper.CategoryMapper;
import com.lijie.mapper.FriendLinkMapper;
import com.lijie.mapper.VisitorMapper;
import com.lijie.model.FriendLink;
import com.lijie.redis.HashRedisServiceImpl;
import com.lijie.redis.StringRedisServiceImpl;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.LinkedHashMap;

/**
 * @author: lijie
 * @Date: 2019/5/6 14:30
 * Describe:
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class RedisTest {

    @Autowired
    HashRedisServiceImpl hashRedisService;
    @Autowired
    VisitorMapper visitorMapper;

    @Test
    public void redisTest(){
    }

}
