package com.qpact.cvviewer.service;

import com.qpact.cvviewer.apimodel.Cv;
import com.qpact.cvviewer.apimodel.CvSummary;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface CvMapper {

    CvMapper INSTANCE = Mappers.getMapper(CvMapper.class);

    Cv cvEntityToCvResponse(com.qpact.cvviewer.model.Cv cv);
    List<Cv> listOfCvEntityToListOfCvResponse(List<com.qpact.cvviewer.model.Cv> cvs);

    CvSummary cvEntityToCvSummaryResponse(com.qpact.cvviewer.model.Cv cv);
    List<CvSummary> listOfCvEntityToListOfCvSummaryResponse(List<com.qpact.cvviewer.model.Cv> cvs);
}
