package com.xjt.service.impl;

import com.xjt.dao.IUserDao;
import com.xjt.model.User;
import com.xjt.service.IUserService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service("userService")
public class UserServiceImpl implements IUserService {

    @Resource
    private IUserDao userDao;


    @Override
    public List<User> selectUser(Integer grade,Integer num) {

        List<User> users = userDao.selectList(num);
        return users;
    }

    @Override
    public List<User> getStatus(Integer status) {

        return userDao.getStatus(status);
    }

    @Override
    public Integer updateStatus(Integer grade, String ids) {
       if (!StringUtils.isEmpty(ids)){
           String[] split = ids.split(",");
           for (String s : split) {
               userDao.updateStatus(grade,Integer.valueOf(s));
           }
       }
        return 200;
    }

    @Override
    public Integer del() {
        userDao.del();
        return 200;
    }

    @Override
    public List<User> getAll() {
        List<User> allList = userDao.getAll();
        return allList;
    }

    @Override
    public User getSurplus() {
        User user = userDao.getSurplus();
        userDao.updateStatus(8,user.getId());
        return user;
    }
}
