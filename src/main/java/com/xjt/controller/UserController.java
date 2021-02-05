package com.xjt.controller;

import com.xjt.model.Params;
import com.xjt.model.User;
import com.xjt.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


@Controller
@RequestMapping("/start")
public class UserController {

    @Autowired
    private IUserService userService;

    /**
     * 随机选取人
     * @param grade 几等奖
     * @param num
     * @return
     */
    @RequestMapping(value = "/get/{grade}/{num}",method = RequestMethod.GET)
    @ResponseBody
    public List<User> getUsers(@PathVariable("grade") Integer grade,@PathVariable("num") Integer num) {
        //ModelAndView mv = new ModelAndView();
        //mv.addObject("user", user);
        //mv.setViewName("user");
        List<User> users = userService.selectUser(grade, num);
        if (users !=null && users.size() >0){
            String ids ="";
            for (User user : users) {
                ids +=user.getId()+",";
            }
            userService.updateStatus(grade,ids.substring(0,ids.length()-1));
        }
        return users;
    }

    /**
     * 将得到的id 进行修改状态
     * @param
     * @param
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/updateStatus",method = RequestMethod.POST)
    @ResponseBody
    public Integer updateStatus(@RequestBody Params params) {

        return userService.updateStatus(params.getGrade(),params.getIds());
    }

    /**
     * 通过不同的页面，点击去先查询是否中奖
     * @param status -1: 特等奖；1:一等奖; 2:二等奖; 3:三等奖; 4:四等奖; 51:五等奖-1;52：五等奖-2;6:六等奖;
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getJiang/{status}",method = RequestMethod.GET)
    @ResponseBody
    public List<User> selectUser(@PathVariable("status") Integer status) {
        return userService.getStatus(status);
    }

    @RequestMapping(value = "/del",method = RequestMethod.GET)
    @ResponseBody
    public Integer del(){
        return userService.del();
    }

    @RequestMapping(value = "/getAll",method = RequestMethod.GET)
    @ResponseBody
    public List<User> getAll(){
        return userService.getAll();
    }

    public static void main(String[] args) {

    }
}
