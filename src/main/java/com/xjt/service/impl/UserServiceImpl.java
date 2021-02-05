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
        List<User> resultList = new ArrayList<>();

        if (grade.intValue() ==1){
            resultList.addAll(userDao.selectList(num-1));
            resultList.add(userDao.getOne());
            resultList.sort(Comparator.comparing(User::getId).thenComparing(User::getPerName));
        }else{
            resultList.addAll(userDao.selectList(num));
        }
        return resultList;
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
}
