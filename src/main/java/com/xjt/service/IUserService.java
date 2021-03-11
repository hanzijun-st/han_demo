package com.xjt.service;

import com.xjt.model.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IUserService {

    List<User> selectUser(@Param("grade") Integer grade,@Param("num") Integer num);

    /**
     * 查询是否中奖
     * @param status
     * @return
     */
    List<User> getStatus(Integer status);

    /**
     * 修改中奖为几等
     * @param grade
     * @param ids
     * @return
     */
    Integer updateStatus(Integer grade, String ids);

    Integer del();

    /**
     * 得到所有中奖者
     * @return
     */
    List<User> getAll();

    /**
     * 获取一个未中奖的
     * @return
     */
    User getSurplus();
}
