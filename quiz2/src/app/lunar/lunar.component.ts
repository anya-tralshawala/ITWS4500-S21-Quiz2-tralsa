import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-lunar',
  templateUrl: './lunar.component.html',
  styleUrls: ['./lunar.component.css']
})
export class LunarComponent implements OnInit {
  private data = [
    { "TypeAndDate": 'Total: 2001 Jan 09', "Duration": '11760', "Year": '2001' },
    { "TypeAndDate": 'Partial: 2001 Jul 05', "Duration": '9540', "Year": '2001.3' },
    // { "TypeAndDate": 'Penumbral: 2001 Dec 30', "Duration": '0', "Year": '2001.6' },
    // { "TypeAndDate": 'Penumbral: 2002 May 26', "Duration": '0', "Year": '2002' },
    // { "TypeAndDate": 'Penumbral: 2002 Jun 24', "Duration": '0', "Year": '2002.3' },
    // { "TypeAndDate": 'Penumbral: 2002 Nov 20', "Duration": '0', "Year": '2002.6' },
    { "TypeAndDate": 'Total: 2003 May 16', "Duration": '11640', "Year": '2003' },
    { "TypeAndDate": 'Total: 2003 Nov 09', "Duration": '12660', "Year": '2003.5' },
    { "TypeAndDate": 'Total: 2004 May 04', "Duration": '12180', "Year": '2004' },
    { "TypeAndDate": 'Total: 2004 Oct 28', "Duration": '13140', "Year": '2004.5' },
    // { "TypeAndDate": 'Penumbral: 2005 Apr 24', "Duration": '0', "Year": '2005' },
    { "TypeAndDate": 'Partial: 2005 Oct 17', "Duration": '3360', "Year": '2005.5' },
    // { "TypeAndDate": 'Penumbral: 2006 Mar 14', "Duration": '0', "Year": '2006' },
    { "TypeAndDate": 'Partial: 2006 Sep 07', "Duration": '5460', "Year": '2006.5' },
    { "TypeAndDate": 'Total: 2007 Mar 03', "Duration": '13260', "Year": '2007' },
    { "TypeAndDate": 'Total: 2007 Aug 28', "Duration": '12720', "Year": '2007.5' },
    { "TypeAndDate": 'Total: 2008 Feb 21', "Duration": '12300', "Year": '2008' },
    { "TypeAndDate": 'Partial: 2008 Aug 16', "Duration": '11280', "Year": '2008.5' },
    // { "TypeAndDate": 'Penumbral: 2009 Feb 09', "Duration": '0', "Year": '2009' },
    // { "TypeAndDate": 'Penumbral: 2009 Jul 07', "Duration": '0', "Year": '2009.25' },
    // { "TypeAndDate": 'Penumbral: 2009 Aug 06', "Duration": '0', "Year": '2009.5' },
    { "TypeAndDate": 'Partial: 2009 Dec 31', "Duration": '3600', "Year": '2009.75' },
    { "TypeAndDate": 'Partial: 2010 Jun 26', "Duration": '9780', "Year": '2010' },
    { "TypeAndDate": 'Total: 2010 Dec 21', "Duration": '12540', "Year": '2010.5' },
    { "TypeAndDate": 'Total: 2011 Jun 15', "Duration": '13140', "Year": '2011' },
    { "TypeAndDate": 'Total: 2011 Dec 10', "Duration": '12720', "Year": '2011.5' },
    { "TypeAndDate": 'Partial: 2012 Jun 04', "Duration": '7620', "Year": '2012' },
    // { "TypeAndDate": 'Penumbral: 2012 Nov 28', "Duration": '0', "Year": '2012.5' },
    { "TypeAndDate": 'Partial: 2013 Apr 25', "Duration": '1620', "Year": '2013' },
    // { "TypeAndDate": 'Penumbral: 2013 May 25', "Duration": '0', "Year": '2013.3' },
    // { "TypeAndDate": 'Penumbral: 2013 Oct 18', "Duration": '0', "Year": '2013.6' },
    { "TypeAndDate": 'Total: 2014 Apr 15', "Duration": '12900', "Year": '2014' },
    { "TypeAndDate": 'Total: 2014 Oct 08', "Duration": '12000', "Year": '2014.5' },
    { "TypeAndDate": 'Total: 2015 Apr 04', "Duration": '12540', "Year": '2015' },
    { "TypeAndDate": 'Total: 2015 Sep 28', "Duration": '12200'/*'12000'*/, "Year": '2015.5' },
    // { "TypeAndDate": 'Penumbral: 2016 Mar 23', "Duration": '0', "Year": '2016' },
    // { "TypeAndDate": 'Penumbral: 2016 Sep 16', "Duration": '0', "Year": '2016.5' },
    // { "TypeAndDate": 'Peunmbral: 2017 Feb 11', "Duration": '0', "Year": '2017' },
    { "TypeAndDate": 'Partial: 2017 Aug 07', "Duration": '6900', "Year": '2017.5' },
    { "TypeAndDate": 'Total: 2018 Jan 31', "Duration": '12380'/*'12180'*/, "Year": '2018' },
    { "TypeAndDate": 'Total: 2018 Jul 27', "Duration": '14100', "Year": '2018.5' },
    { "TypeAndDate": 'Total: 2019 Jan 21', "Duration": '11820', "Year": '2019' },
    { "TypeAndDate": 'Partial: 2019 Jul 16', "Duration": '10680', "Year": '2019.5' },
    // { "TypeAndDate": 'Peunmbral: 2020 Jan 10', "Duration": '0', "Year": '2020' },
    // { "TypeAndDate": 'Penumbral: 2020 Jun 05', "Duration": '0', "Year": '2020.25' },
    // { "TypeAndDate": 'Penumbral: 2020 Jul 05', "Duration": '0', "Year": '2020.5' },
    // { "TypeAndDate": 'Peunumbral: 2020 Nov 30', "Duration": '0', "Year": '2020.75' },
    { "TypeAndDate": 'Total: 2021 May 26', "Duration": '11220', "Year": '2021' },
    { "TypeAndDate": 'Partial: 2021 Nov 19', "Duration": '12480', "Year": '2021.5' }
  ]
  private svg: any;
  private margin = 50;
  private width = 1000 - (this.margin * 2);
  private height = 1800 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot();
  }

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
      .domain([2000, 2030])
      .range([0, this.width]);
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([1500/*0*/, 15000])
      .range([this.height, 0]);
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => x(d.Year))
      .attr("cy", (d: any) => y(d.Duration))
      .attr("r", 7)
      .style("opacity", .5)
      .style("fill", "purple");

    // Add labels
    dots.selectAll("text")
      .data(this.data)
      .enter()
      .append("text")
      .text((d: any) => d.TypeAndDate)
      .attr("x", (d: any) => x(d.Year))
      .attr("y", (d: any) => y(d.Duration))
  }
}
