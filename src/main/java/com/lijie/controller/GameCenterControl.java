package com.lijie.controller;

import com.lijie.service.ArticleService;
import com.lijie.utils.TransCodingUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.Map;

/**
 * @author: lijie
 * Describe: 所有页面跳转
 */
@Controller
public class GameCenterControl {

    /**
     * 跳转推箱子游戏
     */
    @GetMapping("/tuixiangzi")
    public String tuixiangzi(){
        return "/games/tuixiangzi";
    }

    /**
     * 跳转3D魔方游戏
     */
    @GetMapping("/mofang")
    public String mofang(){
        return "/games/mofang";
    }

    /**
     * 跳转单机泡泡龙游戏
     */
    @GetMapping("/paopaolong")
    public String paopaolong(){
        return "/games/paopaolong";
    }

    /**
     * 跳转中国象棋游戏
     */
    @GetMapping("/xiangqi")
    public String xiangqi(){
        return "/games/xiangqi";
    }

    /**
     * 跳转NeverGiveUp游戏
     */
    @GetMapping("/nevergiveup")
    public String nevergiveup(){
        return "/games/nevergiveup";
    }

    /**
     * 跳转打字游戏
     */
    @GetMapping("/dazi")
    public String dazi(){
        return "/games/dazi";
    }

    /**
     * 跳转坦克大战游戏
     */
    @GetMapping("/tanke")
    public String tanke(){
        return "/games/tanke";
    }


    /**
     * 跳转像素小鸟游戏
     */
    @GetMapping("/xiangsuxiaoniao")
    public String xiangsuxiaoniao(){
        return "/games/xiangsuxiaoniao";
    }

    /**
     * 跳转经典泡泡龙消除游戏
     */
    @GetMapping("/pop")
    public String pop(){
        return "/games/pop";
    }

    /**
     * 跳转经典泡泡龙消除游戏
     */
    @GetMapping("/pacman")
    public String pacman(){
        return "/games/pacman";
    }

    /**
     * 跳转经典泡泡龙消除游戏
     */
    @GetMapping("/game2048")
    public String game2048(){
        return "/games/game2048";
    }

    /**
     * 跳转俄罗斯方块游戏
     */
    @GetMapping("/eluosifangkuai")
    public String eluosifangkuai(){
        return "/games/eluosifangkuai";
    }
}
