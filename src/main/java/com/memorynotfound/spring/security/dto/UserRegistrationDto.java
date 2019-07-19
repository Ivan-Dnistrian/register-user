package com.memorynotfound.spring.security.dto;

import javax.validation.constraints.AssertTrue;


public class UserRegistrationDto {



    private String password;

    private String UserName;

    @AssertTrue
    private Boolean terms;


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return UserName;
    }

    public void setEmail(String email) {
        this.UserName = email;
    }

    public Boolean getTerms() {
        return terms;
    }

    public void setTerms(Boolean terms) {
        this.terms = terms;
    }

}
