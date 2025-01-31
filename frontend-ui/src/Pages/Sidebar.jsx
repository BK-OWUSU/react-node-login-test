"use client";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { Alert } from "../components/Alert";
import { useNavigate } from "react-router-dom";

export function CustomSidebar() {
  const navigate = useNavigate();
  const handleOnConfirmClicked = () => {
    navigate("/login");
  }
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/register" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
          <Alert 
          btnType={2}
          message="Are you sure you want to logout"
          confirmText="Yes"
          cancelText="No"
          onConfirmClicked={handleOnConfirmClicked}
          />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}