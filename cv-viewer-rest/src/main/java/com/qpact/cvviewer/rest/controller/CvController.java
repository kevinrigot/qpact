package com.qpact.cvviewer.rest.controller;

import com.qpact.cvviewer.rest.api.CvApi;
import com.qpact.cvviewer.rest.model.Cv;
import com.qpact.cvviewer.rest.model.CvSummary;
import com.qpact.cvviewer.rest.service.CvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CvController implements CvApi{

    @Autowired
    private CvService cvService;

    @Override
    public ResponseEntity<List<CvSummary>> getCv() {
        return new ResponseEntity<List<CvSummary>>(cvService.getAllCv(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Cv> getCvById(String cvId) {
        return new ResponseEntity<Cv>(cvService.getCvById(cvId), HttpStatus.OK);
    }
}
